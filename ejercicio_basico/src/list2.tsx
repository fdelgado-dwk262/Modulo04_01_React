import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

export const ListPage02: React.FC = () => {

  const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));

  function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }

  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

  // function createData(login, node_id, id) {
  //   return { login, node_id, id };
  // }

  // const rows = [
  //   createData('Cupcake', 305, 3.7),
  //   createData('Donut', 452, 25.0),
  //   createData('Eclair', 262, 16.0),
  //   createData('Frozen yoghurt', 159, 6.0),
  //   createData('Gingerbread', 356, 16.0),
  //   createData('Honeycomb', 408, 3.2),
  //   createData('Ice cream sandwich', 237, 9.0),
  //   createData('Jelly Bean', 375, 0.0),
  //   createData('KitKat', 518, 26.0),
  //   createData('Lollipop', 392, 0.2),
  //   createData('Marshmallow', 318, 0),
  //   createData('Nougat', 360, 19.0),
  //   createData('Oreo', 437, 18.0),
  // ];

  const useStyles2 = makeStyles({
    table: {
      minWidth: 500,
    },
  });


  const [filter, setFilter] = React.useState("lemoncode");
  const [userCollection, setUsercollection] = React.useState([]);
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const montaJson = () => {
    fetch(`https://api.github.com/orgs/${filter}/members`)
      .then((response) => response.json())
      .then((json) => setSafeUserCollection(json));
  };

  const setSafeUserCollection = (userCollection) => {
    setUsercollection(userCollection);
    console.log(userCollection.length); //<-- sabemos la cantidad de registros que hay

  }

  // evento del submit
  const handleListado = (e) => {
    e.preventDefault()

    if (filter.length > 0) {
      montaJson()
    } else {
      alert("inserte empresa a buscar")
    }
  };

  // monta la primera vez la lista en base al parametro de entrada por defecto
  React.useEffect(() => {
    montaJson()
  }, []);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, userCollection.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <form onSubmit={handleListado}>
        <TextField id="outlined-basic" label="Organización" variant="outlined" value={filter} onChange={(e) => setFilter(e.target.value)} />
        <div>
          <Button type="button" variant="contained" color="primary" onClick={(e) => setFilter('')}>
            reset
                    </Button>
          <Button type="submit" variant="contained" color="primary">
            Listar por Organización
                    </Button>
        </div>
      </form>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableBody>
            {(rowsPerPage > 0
              ? userCollection.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : userCollection
            ).map((member) => (
              <TableRow key={member.login}>
                <TableCell component="th" scope="row">
                  {member.login}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {member.node_id}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {member.id}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={userCollection.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
