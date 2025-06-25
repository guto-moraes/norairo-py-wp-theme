export const brazilianFormatDate = (post_date: Date | string = new Date()) => {
  /**
   * @post_date date - new Date() or valid date string;
   * @style string - short, medium, long or full options
   * @return string - output dd/mm/yyyy
   */

  const date = new Date(post_date);
  const formatDate = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short" });
  const brazilianDate = formatDate.format(date.setDate(date.getDate()));
  return brazilianDate;
};

export const brazilianFormatDate19Century = (
  post_date: Date | string = new Date()
) => {
  /**
   * @post_date date - new Date() or valid date string;
   * @style string - short, medium, long or full options
   * @return string - output dd/mm/yyyy more one day
   */

  const date = new Date(post_date);
  const formatDate = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short" });
  const brazilianDate = formatDate.format(date.setDate(date.getDate() + 1));
  return brazilianDate;
};

export const dateTodayAbntFormat = () => {
  const date = new Date().toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return date.replace(/de /g, "");
};

export const serverDateToBrazilianFormat = (post_date: Date | string) => {
  const date = new Date(post_date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return date;
};

export const letterDate = (post_date: string) => {
  const date = serverDateToBrazilianFormat(
    post_date.replace(/(\d{4})(\d{2})(\d{2})/, "$1/$2/$3")
  );
  return date;
};

export const letterCreatedAt = (date: string) => {
  const hasSlash = date.includes("/");
  if (hasSlash) {
    const newDate = date.split("/");
    return newDate[newDate.length - 1];
  } else {
    return date;
  }
};
