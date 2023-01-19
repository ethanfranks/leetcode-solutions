/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    if (!s) {
        return true;
    }

    if (s.length === 1 && t.includes(s.charAt(0))) {
        return true;
    }

    if (s === t) {
        return true;
    }

    if (s.length > t.length) {
        return false;
    }
    
    let tSlice = t;
    console.log(tSlice);

    for (let i = 0; i < s.length; i++) {
        const currentChar = s.charAt(i);

        if (tSlice.includes(currentChar)) {
            tSlice = tSlice.slice(tSlice.indexOf(currentChar) + 1);
            console.log(tSlice);

            if (i === s.length - 1) {
                return true;
            }
        } else {
            return false;
        }
    }
};