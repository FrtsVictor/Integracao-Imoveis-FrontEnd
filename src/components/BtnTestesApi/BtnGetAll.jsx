import React, { useCallback } from 'react';

import api from '../../services/api';

const BtnGetAll = () => {
  const acessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZExvZ2luIjoiMzlmODExOWItYzA1OC04NTNjLTM3ZjMtYmUxYjE0NTMzZjA3IiwiaWRBZG1pbmlzdHJhZG9yYSI6IjRmODM1Y2JhLTdjOWMtNGI5OS1hNGYzLTAzZmNiMmI2MTQyZCIsImlkUGVzc29hIjoiMzlmODExOWItYmZjNC0yMDBlLTY3MzItOWUyMzVjZGI0M2Q0Iiwibm9tZSI6IlBhdWxvIENlc2FyIiwiZW1haWwiOiJkZW5pc2UuZHNuLmltYkBhbHRlcmRhdGEuY29tLmJyIiwicGVyZmlsIjoiQ29ycmV0b3IiLCJ1cmxJbWFnZW0iOiJodHRwczovL3dlYi1pbW1vYmlsZXdlYi5zMy5hbWF6b25hd3MuY29tL2NvcnJldGFnZW0vcHVibGljYS80ZjgzNWNiYS03YzljLTRiOTktYTRmMy0wM2ZjYjJiNjE0MmQvY29ycmV0b3I2MzczNzU5OTE2Njc2MzMyNzAucG5nIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDEyLyJ9.31Px5-gjnIzQDaEHsAmxs71rXmeijg75fOgk9jzd9UQ';

  const config = {
    headers: { Authorization: `bearer ${acessToken}` },
  };

  const printRequest = useCallback(
    async () => {
      try {
        const response = await api.post('Imovel/obter-lista', {}, config);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }, [acessToken],
  );

  return (
    <button type="button" onClick={() => printRequest()}>GetAll</button>
  );
};

export default BtnGetAll;
