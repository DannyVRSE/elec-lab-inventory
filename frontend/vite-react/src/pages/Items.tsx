import axios from "axios";
import { useEffect, useState } from "react";

const Items = () => {

  interface Item {
    id: number;
    categoryId: number;
    manufacturer: string;
    manufacturer_serial: string;
    model: string;
    lab_serial: string;
    condition: string;
  }

  const [items, setItems] = useState<Item[]>([]);

  const getAllItems = () => {

    axios.get(`${import.meta.env.VITE_BASE_URL}/items`)
      .then((response) => {
        setItems(response.data);
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getAllItems()
  }, [])

  return (
    <>
      <div className="container">
        <div className="inner-div-1">
          <h1>Items</h1>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">category</th>
                  <th scope="col">manufucturer</th>
                  <th scope="col">model</th>
                  <th scope="col">manfucturer serial</th>
                  <th scope="col">lab serial</th>
                  <th scope="col">condition</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.categoryId}</td>
                    <td>{item.manufacturer}</td>
                    <td>{item.model}</td>
                    <td>{item.manufacturer_serial}</td>
                    
                    <td>{item.lab_serial}</td>
                    <td>{item.condition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Items
