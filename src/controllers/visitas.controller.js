import Visita from "../models/visitas.model";
/*import Guia from "../models/guia.model";
import Circuito from "../models/circuito.model";
import Turno from "../models/turno.model";
import Reserva from "../models/reserva.model";
import Cliente from "../models/cliente.model";*/

// Supongamos que tienes un método en tu modelo de Reserva para obtener la información de una reserva por su ID
const obtenerReservaPorId = async (idReserva) => {
  try {
    const reserva = await Reserva.findById(idReserva);
    return reserva;
  } catch (error) {
    console.error('Error al obtener la reserva:', error);
    throw error;
  }
};

// Supongamos que tienes un método para guardar una nueva visita en tu modelo de Visita
/*const guardarNuevaVisita = async (idGuia, fecha, idReserva) => {
  try {
    const nuevaVisita = new Visita({
      id_Guia: idGuia,
      fecha: fecha,
      id_Reserva: idReserva,
    });

    const visitaGuardada = await nuevaVisita.save();
    console.log('Visita guardada:', visitaGuardada);
    return visitaGuardada;
  } catch (error) {
    console.error('Error al guardar la visita:', error);
    throw error;
  }
};*/

export const crearVisitaDesdeReserva = async (req, res) => {
  const { guia_dni } = req.body;

  const newVisita = new Visita({
    guia_dni
  });

  const savedTurno = await newTurno.save();
  res.json(savedTurno);
};

// Supongamos que quieres crear una visita usando una reserva específica
const crearVisitaDesdeReserva = async (idGuia, idReserva) => {
  try {
    // Obtener la información de la reserva
    const reserva = await obtenerReservaPorId(idReserva);

    if (reserva) {
      // Usar la fecha de la reserva para crear una nueva visita
      const fechaDeLaReserva = reserva.fecha; // Suponiendo que la reserva tiene un campo 'fecha'

      // Guardar una nueva visita con la fecha de la reserva
      await guardarNuevaVisita(idGuia, fechaDeLaReserva, idReserva);
    } else {
      console.error('La reserva no fue encontrada.');
    }
  } catch (error) {
    console.error('Error al crear la visita desde la reserva:', error);
  }
};

// Llamar a la función para crear una visita desde una reserva específica
const idDelGuia = 'id_del_guia';
const idDeLaReserva = 'id_de_la_reserva';

crearVisitaDesdeReserva(idDelGuia, idDeLaReserva);