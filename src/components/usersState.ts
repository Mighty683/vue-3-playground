import {Ref, ref} from "vue";

type UsersState = {
  users: Ref<String[]>
}
export function setupUsersState() {
  const users = ref(['Tomek', 'Adam', 'Robert']);

  return {
    users
  }
}