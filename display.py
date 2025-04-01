import print

#TODO - define display implementation specifics


def index():
    book_list = print.get_book_list("tbr.txt")
    return book_list

def display():
    print.print_books("tbr.txt")

def display_completed():
    print.get_completed(book_list)
