import {Ref, ref} from "vue";

import * as UsersService from './users.service'

type UsersState = {
  users: Ref<String[]>
  getUsers: () => Promise<void>,
  loading: Ref<boolean>
}
export function setupUsersState(): UsersState {
  const users = ref<String[]>([]);

  const loading = ref(true);

  async function getUsers() {
    users.value = await UsersService.getUsers();
    loading.value = false;
  }

  return {
    users,
    getUsers,
    loading
  }
}