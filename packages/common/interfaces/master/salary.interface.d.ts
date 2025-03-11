import Group from './group.interface';
import Period from './period.interface';
import RU from './ru.interface';
export default interface Salary {
    id: string;
    nominal: number;
    group: Group;
    ru: RU;
    period: Period;
}
