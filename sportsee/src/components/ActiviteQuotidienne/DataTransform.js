
class DataTransform {
  static transformData(data) {
    return data.map((item, index) => index + 1);
  }
}

export default DataTransform;
