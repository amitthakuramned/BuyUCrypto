export const formatName = (text: any) => {
    var x = text.split("-");
    if (x?.length > 0) {
      return x[1] + " /" + x[0];
    } else {
      return text;
    }
  };