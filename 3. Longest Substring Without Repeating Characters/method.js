/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s && s.length) {    
        let start = 0, length = 0;
        let str1 = s.substring(start, start+1);

        for(end=start+1; end<s.length; end++) {
            let str2 = s.substring(end, end+1);
            let index = str1.indexOf(str2);
            if(index > -1) {
                start = start + index + 1;
                str1 = str1.substring(index+1) + str2;
            } else {
                str1 += str2;
                if((end-start) >= length) {
                    length = (end-start);
                }
            }
        }
        
        return length + 1;
    }

    return 0
};