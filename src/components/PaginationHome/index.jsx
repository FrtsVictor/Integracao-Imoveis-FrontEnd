import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const PaginationHome = ({ pageable, setAtualPage }) => {
  const classes = useStyles();
  const [page, setPage] = useState('');

  return (
    <div className={classes.root}>
      <Pagination
        count={pageable.paginacao.totalPaginas || 0}
        page={page}
        onChange={(event, value) => {
          console.log(value);
          setPage(value);
          setAtualPage(value);
        }}
      />
    </div>
  );
};
