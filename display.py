import print as p

#TODO - define display implementation specifics

def index():
    book_list = p.get_book_list("tbr.txt")
    return book_list

def display():
    p.print_books("tbr.txt")

def display_completed():
    book_list = index()
    p.get_completed(book_list)

#TODO - display by alphabet
