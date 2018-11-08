import EventEmitter from 'events';
import AppDispatcher from './AppDispatcher';
import uniqueId from 'lodash/uniqueId';

const initialState = {
    items: [{ value: 'Pants', id: uniqueId(), packed: false },
    { value: 'Jacket', id: uniqueId(), packed: false },
    { value: 'iPhone Charger', id: uniqueId(), packed: false },
    { value: 'MacBook', id: uniqueId(), packed: false },
    { value: 'Sleeping Pills', id: uniqueId(), packed: true },
    { value: 'Hat', id: uniqueId(), packed: false },
    { value: 'T-Shirts', id: uniqueId(), packed: false },
    { value: 'Belt', id: uniqueId(), packed: false },
    { value: 'Passport', id: uniqueId(), packed: true },
    { value: 'Sandwich', id: uniqueId(), packed: true },
    ]
}

let jetSetter = { ...initialState };

class JetSetterStore extends EventEmitter {
    constructor() {
        super();
        AppDispatcher.register((action) => {
            switch (action.type) {
                case 'ADD_ITEM':
                    jetSetter.items = [action.value, ...jetSetter.items]
                    this.emit('change');
                    break;
                case 'REMOVE_ITEM':
                    jetSetter.items = jetSetter.items.filter((item) => item.id !== action.value.id);
                    this.emit('change');
                    break;
                case 'MARK_ALL_AS_UNPACKED':
                    jetSetter.items = jetSetter.items.map(item => {
                        item.packed = false;
                        return item;
                    });
                    this.emit('change');
                    break;
                case 'CHANGE_PACKED_STATUS':
                    jetSetter.items = jetSetter.items.map(item => {
                        if (item.id !== action.value.id)
                            return item;
                        return { ...action.value, packed: !action.value.packed }
                    });
                    this.emit('change');
                    break;
                default:
                    return false;
            }
        });
    }
    getState() {
        return jetSetter;
    }
}

export default new JetSetterStore();
