
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Form, Link ,useNavigate} from 'react-router-dom';


export default function List() {
    const navigate = useNavigate();
    const [listData, setListData] = useState([]);
    const [order, setorder] = useState("ASC");
    const [search, setSearch] = useState('')
    console.log(search);
    useEffect(() => {
        axios.get("https://localhost:7215/api/records")
            .then((getData) => {
                setListData(getData.data);
            })
    }, [])
    
    const setData = (id, name, description) => {
        localStorage.setItem('ID', id)
    }

    const getData = () => {
        axios.get("https://localhost:7215/api/records")
            .then((getData) => {
                setListData(getData.data);
            })
    }
    const sorting = (col)=>{
        if(order === "ASC"){
            const sorted = [...listData].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setListData(sorted);
            setorder("DSC");
        }
        if(order === "DSC"){
            const sorted = [...listData].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setListData(sorted);
            setorder("ASC");
        }
    }
    const styles = {
        table: {
          borderCollapse: "collapse",
          margin: "auto",
        },
        th: {
          border: "1px solid #333",
          padding: 8,
          fontWeight: "bold",
          textAlign: "left",
          backgroundColor: "rgba(0,0,0,0.1)",
        },
        td: {
          border: "1px solid #333",
          padding: 8,
        },
      };
    return (
        <section2>
            <h1>Records</h1>
            <br></br>
                <input onChange={(e) => setSearch(e.target.value)}
                    placeholder='Filter records'/>
            <Table celled style={styles.table}>
            
                <Table.Header style={styles.th}>
                    <Table.Row style={styles.th}>
                        <Table.HeaderCell style={styles.th} onClick={() =>sorting("name")}>Name</Table.HeaderCell>
                        <Table.HeaderCell style={styles.th} onClick={() =>sorting("description")}>Description</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body style={styles.td}>
                    {listData.filter((item)=>{
                        return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search) || item.description.toLowerCase().includes(search);
                    }).map((data) => {
                        return (
                            <Table.Row style={styles.td} onClick={() => {setData(data.id);navigate('/details');}}>
                                <Table.Cell style={styles.td}>{data.name}</Table.Cell>
                                <Table.Cell style={styles.td}>{data.description}</Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
            <br></br>
            <Link to='/newRecord'>
                <Button
                    color="blue">
                    Add Record
                </Button>
            </Link>
        </section2>
    )
}