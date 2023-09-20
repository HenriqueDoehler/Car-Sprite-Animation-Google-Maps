export const formatDate = (utcString) => {
  const date = new Date(utcString);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return new Intl.DateTimeFormat("pt-BR", options).format(date);
};
