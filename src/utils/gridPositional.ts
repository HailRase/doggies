import s from "../components/c3-breeds/Breeds.module.scss";

export const gridPositional = (index: number) => {
    switch (index + 1) {
        case 1:
            return s.item1M
        case 4:
            return s.item1L
        case 8:
            return s.item2M
        case 10:
            return s.item2L
        case 11:
            return s.item3M
        case 14:
            return s.item3L
        case 18:
            return s.item4M
        case 20:
            return s.item4L
        default:
            return ''
    }
}