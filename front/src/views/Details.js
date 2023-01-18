import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from "axios";
import { Link ,useNavigate} from 'react-router-dom';

export default function Details() {
    const [recordData, setRecordData] = useState([]);
    const [recordID, setRecordID] = useState(null);
    useEffect(() => {
        setRecordID(localStorage.getItem('ID'))
        axios.get('https://localhost:7215/api/records/' + `${localStorage.getItem('ID')}`)
            .then((getData) => {
                setRecordData(getData.data);
            })
    }, [])
    const getData = () => {
        axios.get('https://localhost:7215/api/records/' + `${localStorage.getItem('ID')}`)
            .then((getData) => {
                console.log(getData.data);
                setRecordData(getData.data);
            })
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
          backgroundColor: "rgba(0,0,0,0.3)",
        },
        td: {
          border: "1px solid #333",
          padding: 8,
          width: "150px"
        }
      };
    return (
        <section2>
            <h1>Record details</h1>
            <br></br>
            <Table celled style={styles.table}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell style={styles.th}>ID</Table.HeaderCell>
                        <Table.HeaderCell style={styles.th}>Name</Table.HeaderCell>
                        <Table.HeaderCell style={styles.th}>Description</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                            <Table.Row>
                                <Table.Cell style={styles.td}>{recordData.id}</Table.Cell>
                                <Table.Cell style={styles.td}>{recordData.name}</Table.Cell>
                                <Table.Cell style={styles.td}>{recordData.description}</Table.Cell>
                            </Table.Row>

                </Table.Body>
            </Table>
        </section2>
    )
}