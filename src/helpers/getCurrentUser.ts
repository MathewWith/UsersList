import { useTypedSelector } from "src/hooks/useTypedSelector"

export const GetCurrentUser = (id: string) => {
    const data = useTypedSelector((state) => state.users)
    return data.users.filter((user: any) => user.id === +id)[0]
}