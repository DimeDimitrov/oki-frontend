import { useApiStore } from '~/store/index';
import data from '~/assets/data.json'

export default async function () {
  const store = useApiStore()

  if(!store.data){
    store.setData(data);
  }
}
