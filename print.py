f = open("tbr.txt", "r")

book_list = []

for line in f:
    books = {}
    line = line.strip("\n")
    name,author,genre = line.split(",")
    books["Title"] =  name.lstrip()
    books["Author"] = author.lstrip()
    book_list.append(books)


#print(book_list)
for book in book_list:
    print(book["Title"],"by",book["Author"])
print("TOTAL:",len(book_list))