const getTheTitles = function(bookList) {
    let listOfTitles = new Array();
    bookList.forEach((book) => {
        listOfTitles.push(book.title);
    });

    return listOfTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
