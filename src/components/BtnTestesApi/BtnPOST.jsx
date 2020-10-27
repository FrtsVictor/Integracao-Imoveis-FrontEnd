import React, { useCallback } from 'react';

// import api from '../../services/api';
import apiImoveis from '../../services/apiIntegracaoImoveis';

const BtnGetAll = () => {
  const acessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZExvZ2luIjoiMzlmODExOWItYzA1OC04NTNjLTM3ZjMtYmUxYjE0NTMzZjA3IiwiaWRBZG1pbmlzdHJhZG9yYSI6IjRmODM1Y2JhLTdjOWMtNGI5OS1hNGYzLTAzZmNiMmI2MTQyZCIsImlkUGVzc29hIjoiMzlmODExOWItYmZjNC0yMDBlLTY3MzItOWUyMzVjZGI0M2Q0Iiwibm9tZSI6IlBhdWxvIENlc2FyIiwiZW1haWwiOiJkZW5pc2UuZHNuLmltYkBhbHRlcmRhdGEuY29tLmJyIiwicGVyZmlsIjoiQ29ycmV0b3IiLCJ1cmxJbWFnZW0iOiJodHRwczovL3dlYi1pbW1vYmlsZXdlYi5zMy5hbWF6b25hd3MuY29tL2NvcnJldGFnZW0vcHVibGljYS80ZjgzNWNiYS03YzljLTRiOTktYTRmMy0wM2ZjYjJiNjE0MmQvY29ycmV0b3I2MzczNzU5OTE2Njc2MzMyNzAucG5nIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDEyLyJ9.31Px5-gjnIzQDaEHsAmxs71rXmeijg75fOgk9jzd9UQ';

  const config = {
    headers: { Authorization: `bearer ${acessToken}` },
  };

  const objectTest = {
    id: '39f814d0-9f74-04ba-bdce21-6126ec6adefb',
    codigoInterno: 2181,
    codigoAnuncio: '0025',
    idTipo: 'eb4be053-16e6-4272-9a9c-84ddc6db1f96',
    tipo: 'Casa',
    tipoUrl: 'casa',
    endereco: 'Rua asdasdstiasdeira 3333',
    idCidade: '39e64ebbbbbbbbbbbbbbbbbbbbb43eb-4654-4a1c867138ae',
    cidade: 'Brasília',
    cidadeUrl: 'brasilia',
    codigoUF: 7,
    idBairro: '39e65aaaaaaaaa0f7-30f6792c3d89',
    bairro: 'Asa Sul',
    bairroUrl: 'asa-sul',
    cep: '25953-200',
    transacao: 'L',
    dormitorios: 3,
    banheiros: 2,
    valor: 2500.0,
    areaUtil: 300.0,
    valorIPTU: 0.0,
    valorCondominio: 0.0,
    observacoes: null,
    descricao: 'Ótima localização',
    idProprietario: null,
    nomeProprietario: null,
    idCorretor: '39f81sssssssss732-9e235cdb43d4',
    idSerialCorretor: 316,
    nomeCorretor: 'Paulo Cesar',
    urlImagem: 'https://web-immobileweb.s3.amazonaws.com/corretagem/publica/4f835cba-7c9c-4b99-a4f3-03fcb2b6142d/39f814d0-9f80-e661-97c1-1c7104b5f0e2.jpg',
    urlImovel: 'https://corretagem.immobileweb.com.br/immobile/imovel/casa-aluguel-asa-sul-brasilia-df/2181',
    urlYouTube: null,
    exibeEndereco: true,
    visivel: true,
    destaque: true,
    visivelComunidadeAlterdata: true,
    simulaFinanciamento: true,
    numeroIPTU: null,
  };

  const printRequest = useCallback(
    async () => {
      await apiImoveis.imoveis.user.getByUserName('victor');
      // .then((resp) => console.log('loginTest', resp.data));
    }, [],
  );

  return (
    <button type="button" onClick={() => printRequest()}>POST</button>
  );
};

export default BtnGetAll;
