import {observable, computed} from 'mobx';

class MapStore<T extends {id: string}> {
    @observable data: Map<string, T> = new Map();
    
    @computed get items() {
        return [...this.data.values()];
    }

    /**
     * 初始化数据
     */
    init = (values: T[]) => {
        this.data = new Map(values.map(val => [`${val.id}`, val]));
    }

    /**
     * 获取记录
     */
    get = (id: string) => this.data.get(id);

    /**
     * 新增/替换记录
     */
    set = (id: string, value: T) => id && this.data.set(id, value);

    /**
     * 移除记录
     */
    delete = (id: string|string[]) => {
        const ids = Array.isArray(id) ? id : [id];

        ids.forEach(id => this.has(id) && this.data.delete(id));
    }

    /**
     * 更新/批量更新记录
     */
    update = (id: string|string[], value: Partial<T>) => {
        const ids = Array.isArray(id) ? id : [id];

        ids.forEach((id) => {
            const val = this.data.get(id);

            val && Object.entries(value).forEach(([field, newVal]) => {
                (val as any)[field] = newVal;
            });
        });
    }

    /**
     * 判断记录是否存在
     */
    has = (id: string) => this.data.has(id);

    /**
     * 获取键集合
     */
    keys = () => Array.from(this.data.keys()).filter(val => typeof val !== 'undefined');

    /**
     * 获取记录集合
     */
    values = () => Array.from(this.data.values()).filter(val => typeof val !== 'undefined');
}

export default MapStore;
