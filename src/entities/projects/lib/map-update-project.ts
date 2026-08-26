import type { UpdateProjectPayload } from '../model/types';

export const mapUpdateProject = (data: UpdateProjectPayload) => {
  return {
    name: data.data.projectName,
    dueDate: data.data.dueDate,
    price: data.data.price,
    platform: data.data.platform,
  };
};
