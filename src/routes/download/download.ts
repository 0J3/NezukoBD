export const download = (
  data: string | number | boolean,
  filename: string,
  isURL: boolean = false,
) => {
  const link = document.createElement('a');
  if (isURL) link.setAttribute('href', data.toString());
  else
    link.setAttribute(
      'href',
      'data:text/plain;charset=utf-8, ' + encodeURIComponent(data),
    );
  link.setAttribute('download', filename);
  link.click();
};
export default download;
