/**
 * Created by ZHANGXIAOQIAN162 on 2015/11/4.
 */
var FortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple."
];

exports.getfortune = function(){
    var idx = Math.floor(Math.random() * FortuneCookies.length);
    return FortuneCookies[idx];
};