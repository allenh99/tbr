#TODO: API IMPLEMENTATION
def get_book_list(filename):
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
        books["Complete"] = True if done.lstrip() == "Y" else 0
        book_list.append(books)
    return book_list,completed


def print_books(filename):
    book_list,completed = get_book_list(filename)
    for book in book_list:
        print(book["Title"],"by",book["Author"])

    print("READ",completed)
    print("TOTAL:",len(book_list))
    print("PROGRESS:", str((completed/len(book_list))*100) + "%")
    
def sort_books_alphabet(book_list):
    #print(book_list)
    return sorted(book_list,key = lambda i:i['Title'])

def get_completed(book_list):
    return [i for i in book_list if i["Complete"]]

#TODO - sort books by completion
def sort_books_completion(book_list):
    return sorted(book_list,key = lambda i:i["Complete"],reverse=True)

#TODO - Integrate book API?

bl,c = get_book_list("tbr.txt")
print(sort_books_completion(bl))
#print(get_completed(bl))