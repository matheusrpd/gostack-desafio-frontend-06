/* eslint-disable import/no-duplicates */
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

const formatDate = (date: string) =>
  format(parseISO(date), 'P', { locale: pt });

export default formatDate;
