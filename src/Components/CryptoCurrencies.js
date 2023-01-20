import React, { useEffect, useState } from "react";
import "./CryptoCurrencies.css";
import axios from "axios";
import { coinList } from "../Asset/Api";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { LinearProgress, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CryptoCurrencies = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const headerRow = ["Coin", "Price", "Market Cap", "24h Chnage"];

  const navigate = useNavigate();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(coinList);
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const handleSearch =() => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

  };

  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value);
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="crptoTracker">
      <h1>Best Coin Price Tracker in the Market</h1>
      <p>
        With Crpto Tracker, you can manage all your crypto assets from one
        interface. The global crypto market cap is $900.6B a 2.52 % increase
        over the last day.
      </p>
      <input
        type="text"
        placeholder="Search For a Crypto Currency.."
        className="search"
        onChange={handleChange}
        variant="filled"
      />
      <TableContainer
        component={Paper}
        style={{ backgroundColor: "black", color: "white" }}
      >
        {loading ? (
          <LinearProgress />
        ) : (
          <Table aria-label="simple table" style={{ padding: "0px 50px" }}>
            <TableHead style={{ backgroundColor: "orange" }}>
              <TableRow className="head">
                {headerRow.map((header) => (
                  <TableCell
                    style={{
                      color: "white",
                      fontWeight: 800,
                      fontSize: "18px",
                    }}
                    key={header}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {handleSearch()
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  const profit = row.price_change_percentage_24h > 0;
                  return (
                    <TableRow
                      key={row.name}
                      className="data"
                      onClick={() => navigate(`/coins/${row.id}`)}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 25,
                          border: "none",
                        }}
                      >
                        <img src={row.image} alt="coin image" />

                        <div className="coinName">
                          <p>{row.name}</p>
                          <p style={{ marginTop: "-10px" }}>{row.symbol}</p>
                        </div>
                      </TableCell>

                      <TableCell>
                        <p style={{ color: "white" }}>
                          ₹{numberWithCommas(row.current_price.toFixed(2))}
                        </p>
                      </TableCell>
                      <TableCell>
                        <p style={{ color: "white" }}>
                          ₹
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                        </p>
                      </TableCell>
                      <TableCell>
                        <p
                          style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: "500px",
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </p>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        )}
      </TableContainer>

      <Pagination
        count={(handleSearch()?.length / 10).toFixed(0)}
        color="secondary"
        style={{
          padding: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        className="pagination"
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 450);
        }}
      />
    </div>
  );
};

export default CryptoCurrencies;
