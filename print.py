#TODO: API IMPLEMENTATION
def get_book_list(filename)
f = open("tbr.txt", "r")
    book_list = []
    completed = 0

    for line in f:
        books = {}
        line = line.strip("\n")
        name,author,genre,done = line.split(",")
        books["Title"] =  name.lstrip()
        books["Author"] = author.lstrip()
        completed += 1 if done.lstrip() == "Y" else 0
        book_list.append(books)
    return book_list


def print(filename):
    book_list = get_book_list(filename)
    for book in book_list:
        print(book["Title"],"by",book["Author"])

    print("READ",completed)
    print("TOTAL:",len(book_list))
    print("PROGRESS:", str((completed/len(book_list))*100) + "%")