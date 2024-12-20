import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Cell } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PageToRead = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./booksdata.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books);
        setLoading(false);
      });
  }, []);

  if (loading) return <>Loading...</>;

  return (
    <div>
      <Helmet>
        <title>Page Read | BookReview</title>
      </Helmet>
      <h1 className="text-center my-6 text-xl font-semibold">Books page to read</h1>
      <section className="mx-auto">
        <BarChart
          width={1200}
          height={500}
          data={books}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {books.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </section>
    </div>
  );
};

export default PageToRead;
