export const timeGet = ({
    gender, 
    birthday1, 
    birthday2, 
    birthday3, 
    name,
}: {
    gender: string;
    birthday1: string;
    birthday2: string;
    birthday3: string;
    name: string;
}) => {
    let life
    try {
        if (gender === '男') {
            const year = birthday1 + '72'
            const time = new Date(`${year}/${birthday2}/${birthday3}`).getTime();
            life = time - Date.now();
    
        } else if (gender === '女') {
            const year = birthday1 + '75'
            const time = new Date(`${year}/${birthday2}/${birthday3}`).getTime();
            life = time - Date.now();
    
        } else if (!(birthday1 && birthday2 && birthday3 && name === '')) {
            throw new Error('値を入力してください')
        }
    } catch (e: any) {
        alert(e)
        return
    }
    return life
}
