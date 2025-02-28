f = open("tbr.txt", "r")
books = {}
for line in f:
    line = line.strip("\n")
    name,author,genre = line.split(",")
    books[author] = [name] if author not in books.keys() else books[author] + [name]


print(books)