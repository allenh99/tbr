f = open("tbr.txt", "r")

book_list = []

for line in f:
    books = {}
    line = line.strip("\n")
    name,author,genre = line.split(",")
    books[name] = [author,genre]
    book_list.append(books)


print(book_list)