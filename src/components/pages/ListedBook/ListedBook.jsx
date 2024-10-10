import BookListCard from "../../common/BookCard/BookListCard";

const ListedBook = () => {
    return (
        <div className=" container mx-auto">


             {/* tab section */}
      <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab tab-active">
          Read Books
        </a>
        <a role="tab" className="tab">
          Whitelist Books
        </a>
      </div>


      <BookListCard></BookListCard>

   
          
        </div>
    );
};

export default ListedBook;