const my_list = [3, 4, 6, 10, 11, 15];
const alices_list = [1, 5 ,8, 12, 14, 19];
function merge(my_list, alices_list) {
    const my_len = my_list.length;
    const alice_len = alices_list.length;
    let my_pointer = 0;
    let alice_pointer = 0;
    const result = [];
    while (my_pointer < my_len && alice_pointer < alice_len) {
        const my_val = my_list[my_pointer];
        const alice_val = alices_list[alice_pointer];
        if (my_val < alice_val) {
            result.push(my_val);
            my_pointer += 1;
        } else {
            result.push(alice_val);
            alice_pointer += 1;
        }
    }
    while (my_pointer < my_len) {
        result.push(my_list[my_pointer]);
        my_pointer += 1;
    }
    while (alice_pointer < alice_len) {
        result.push(alices_list[alice_pointer]);
        alice_pointer += 1;
    }
    return result;
}
