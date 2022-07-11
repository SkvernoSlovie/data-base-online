import { DefaultFilters, Device, Sensor } from '../types';

const filterData = (filters: DefaultFilters, data: Device[]): Device[] => {
  const filterKeys = Object.keys(filters);

  return data.filter((item) => {
    const passedFilters = filterKeys.filter((key) => {
      if (key in filters && key in item) {
        return filters[key as keyof typeof filters] === item[key as keyof typeof item];
      }
    });
  });
};

export default filterData;
