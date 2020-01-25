const strings = {
  happy_new_year: "Chúc mừng năm mới",
  from_author: "From #Frog2k With Love"
}

const wishes = [
  "Năm mới Canh Tý, được crush chú ý, yêu đương mệt nghỉ, lộc tràn, phú quý.",
  "Tết này không có Táo Quân nhưng chúc bạn năm mới sớm có phu quân.",
  "Năm mới vui vẻ không quạu nha.",
  "Chúc anh, chúc chị năm nay Canh Tý không bị deadline dí.",
  "Chúc mừng năm mới. Công danh sáng ngời. May mắn khắp nơi, đổ về tơi tới.",
  "Năm mới chúc tất cả các bạn mình xinh như hình đại diện Facebook, ảnh nháy triền miên đăng liền không cần sửa.",
  "Năm mới chúc nhau sức khỏe nhiều. Bạc tiền rủng rỉnh thoải mái tiêu. Gia đình hạnh phúc bè bạn quý. Thanh thản vui chơi mọi buổi chiều.",
  "Năm nay \"năm chuột\", dáng chị thì nuột, dáng anh thì đô, chúc dì chúc cô, ngày nào cũng khỏe.",
  "Có 4 kẻ đang đòi tìm cho bằng được bạn. 4 kẻ đó tên là \"Thần Tài\", \"May Mắn\", \"Hạnh Phúc\" và \"Sức Khoẻ\". Họ chắc chắn tìm được bạn trong năm mới này.",
  "Năm mới chúc nhà nhà phát tài phát lộc! Kính chúc ông bà mạnh khỏe, sống lâu vài trăm tuổi, kính chúc ba mẹ phát tài phát lộc kiếm thật nhiều tiền. Chúc các em nhỏ hay ăn chóng lớn nghe lời ba mẹ.",
  "Lộc biếc, mai vàng, xuân hạnh phúc. Đời vui, sức khỏe, Tết an khang.",
  "Chúc nghìn sự như ý, vạn sự như mơ, triệu sự bất ngờ, tỷ lần hạnh phúc.",
  "Tết tới tấn tài. Xuân sang đắc lộc. Gia đình hạnh phúc. Vạn sự cát tường!",
  "Năm mới đã đến. Chúc bạn đáng mến. Sự nghiệp tiến lên. Gặp nhiều điều hên! Rước nhiều may mắn.",
  "Chúc năm mới sức khỏe dẻo dai, công việc thuận lợi, thăng tiến dài dài, phi những nước đại, tiến tới thành công.",
  "Năm mới Tết đến. Rước hên vào nhà. Quà cáp bao la. Mọi nhà no đủ. Vàng bạc đầy hũ. Gia chủ phát tài. Già trẻ gái trai. Sum vầy hạnh phúc. Cầu tài chúc phúc. Lộc đến quanh năm. An khang thịnh vượng!",
  "Cung chúc tân niên, Sức khỏe vô biên, Thành công liên miên, Hạnh phúc triền miên, Túi luôn đầy tiền, Sung sướng như tiên. Chúc mừng năm mới!",
  "Đong cho đầy hạnh phúc. Gói cho trọn lộc tài. Giữ cho mãi an khang. Thắt cho chặt phú quý. Cùng chúc nhau như ý. Hứng cho tròn an khang. Chúc năm mới bình an. Cả nhà đều sung túc.",
  "Cung chúc tân xuân phước vĩnh cửu – Chúc trong gia quyến được an khương – Tân niên lai đáo đa phú quý – Xuân đến an khương vạn thọ tường.",
  "Kính chúc mọi người một năm mới tràn đầy niềm vui và hạnh phúc: Vui trong sức khoẻ, trẻ trong tâm hồn, khôn trong lý tưởng và trưởng thành mọi lĩnh vực.",
  "Mỗi năm là một mùa hoa nở, mỗi năm là một mùa bội thu. Cuộc sống như cây đang lớn. Chúc bạn một năm mới Vạn sự như ý.",
  "Đầu xuân năm mới chúc Bình An; Chúc luôn Tuổi Trẻ chúc An Khang; Chúc sang năm mới nhiều Tài Lộc; Công thành danh toại chúc Vinh Quang.",
  "Chúc mọi người vui vẻ như Chim Sẻ, khỏe mạnh như Đại Bàng, giàu sang như chim Phụng, làm lụng như chim Sâu, sống lâu như Đà Điểu.",
  "Chúc mọi người hay ăn chóng béo, tiền nhiều như kẹo, tình chặt như keo, dẻo dai như mèo, mịn màng trắng trẻo, sức khỏe như voi. Năm mới năm me Gia đình mạnh khỏe Mọi người tươi trẻ Đi chơi vui vẻ.",
  "Năm mới: Đau đầu vì nhà giàu! Mệt mỏi vì học giỏi! Buồn phiền vì nhiều tiền! Ngang trái vì xinh gái! Mệt mỏi vì đẹp giai! Và mất ngủ vì không có đối thủ!",
  "Chúc các bạn có nhiều người để ý. Tỏ tình nhiều ý. Tiền nhiều nặng ký. Công việc vừa ý. Miệng cười mắt ti hí. Sống Lâu Một tí.",
  "Năm mới phát tài, phát lộc, phát tướng, phát tình nhưng đừng phát phì!"
];

function get(key = "") {
  return strings[key];
}

function getRandomWish() {
  return wishes[Math.floor(Math.random() * (wishes.length - 1))]
}

export default {
  get,
  getRandomWish
};