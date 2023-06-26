import React, { useEffect, useState, useContext } from 'react';
import { DateTime } from 'luxon';

// import provider
import CarrinhoContext from '../Context/CarrinhoContext';

import './Style/Funcionamento.css';

function HorarioFuncionamento() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const horarios = [
    { dia: 'Domingo', inicio: '19:00', fim: '22:00' },
    { dia: 'Segunda-feira', inicio: '19:00', fim: '22:00' },
    { dia: 'Terça-feira', inicio: '00:00', fim: '00:00' },
    { dia: 'Quarta-feira', inicio: '19:00', fim: '23:00' },
    { dia: 'Quinta-feira', inicio: '19:00', fim: '23:00' },
    { dia: 'Sexta-feira', inicio: '19:00', fim: '23:00' },
    { dia: 'Sábado', inicio: '19:00', fim: '23:00' },
  ];

  const { estaAberto, setEstaAberto } = useContext(CarrinhoContext);
  const [diaAtual, setDiaAtual] = useState('');

  useEffect(() => {
    const now = DateTime.local();
    const diaSemanaAtual = now.weekdayLong;

    const horarioAtual = horarios
      .find((horario) => horario.dia.toLowerCase() === diaSemanaAtual.toLowerCase());

    if (horarioAtual) {
      const inicio = DateTime.fromFormat(horarioAtual.inicio, 'HH:mm');
      const fim = DateTime.fromFormat(horarioAtual.fim, 'HH:mm');

      setDiaAtual(diaSemanaAtual);
      setEstaAberto(now > inicio && now < fim);
    }
  }, [horarios, setEstaAberto]);

  return (
    <div className="funcionamento-estabelecimento">
      <h2>Horário de Funcionamento</h2>

      <div className="dias-funcionamento">
        <p>
          <strong>De Quarta-feira a Segunda-feira:</strong>
          {' '}
          A partir das 19:00 horas.
        </p>
        <p className="fechado">
          <strong>Terça-feira:</strong>
          {' '}
          Fechado
        </p>
      </div>

      {diaAtual && (
        <div className="status-funcionamento">

          <p className={ estaAberto ? 'aberto' : 'fechado' }>
            <strong>Status:</strong>
            {' '}
            {estaAberto ? 'Aberto' : 'Fechado'}
          </p>

        </div>
      )}
    </div>
  );
}

export default HorarioFuncionamento;
