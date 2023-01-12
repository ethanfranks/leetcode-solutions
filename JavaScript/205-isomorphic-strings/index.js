/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    const sMap = new Map();
    const tMap = new Map();
    sMap.set(s.charAt(0), t.charAt(0));
    tMap.set(t.charAt(0), s.charAt(0));

    for (let i = 1; i < s.length; i++) {
        const sCurrent = s.charAt(i);
        const tCurrent = t.charAt(i);

        if (sMap.has(sCurrent)) {
            const tValue = sMap.get(sCurrent);

            if (tValue == t.charAt(i)) {
                continue;
            } else {
                return false;
            }
        } 
        
        if (tMap.has(tCurrent)) {
            const sValue = tMap.get(tCurrent);

            if (sValue == s.charAt(i)) {
                continue;
            } else {
                return false;
            }
        }

        sMap.set(s.charAt(i), t.charAt(i));
        tMap.set(t.charAt(i), s.charAt(i));
    }

    return true;
};
