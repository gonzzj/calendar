export interface IReminder {
    id: number
    hour: string
    title: string
    description: string
    backgroundColor: string
    day: number
}

export interface IDay {
    number: number,
    reminders: Array<IReminder>
}