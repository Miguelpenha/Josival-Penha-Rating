import { IRating } from '../types'
import { DateTime } from 'luxon'

function useSortRatings(ratings: IRating[] | undefined) {
    if (ratings) {
        function format(date: string) {
            return DateTime.fromObject({
                day: Number(date.split('/')[0]),
                year: Number(date.split('/')[2]),
                month: Number(date.split('/')[1])
            }).setLocale('pt-br').toMillis()
        }

        return ratings.sort((a, b) => format(a.date) - format(b.date))
    }
}

export default useSortRatings