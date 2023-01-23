const strings = {
  happy_new_year: "Chúc mừng năm mới",
  click_to_play: "Hí! Bấm vào tui nha!",
  from_author: "From #Ếch with love! ❤️",
  label_gift_box: "Bấm để mở hộp quà nhé!"
}

const wishes = [
  "Tôi ước năm mới sẽ mang đến tất cả những gì mà các bạn mong muốn, mọi sự đều thuận lợi. Chúc mừng năm mới, an khang thịnh vượng!",
  "Tân xuân cung chúc quý huynh đài, tháng nào cũng vượt KPI. Sếp quý, đồng nghiệp thương, tiền bạc dư dả nhiều. Tình duyên như ý, không sợ thiếu người yêu.",
  "Chúc bạn năm mới một rổ tiếng cười, niềm vui và lời chúc ấm áp của tôi từ ngàn dặm xa xôi gửi tặng cho bạn tốt của tôi. Chúc bạn năm mới hạnh phúc, gặp nhiều may mắn và thành công!",
  "Chúc mừng năm mới – vạn sự như ý – sinh lý dồi dào – vàng vào cả ký – tiền ra ti tí – thật là hết ý.",
  "Chiềng làng chiềng xã, thượng hạ đông tây, xa gần đó đây, vểnh tai nghe chúc: Tân niên sung túc, lắm phúc nhiều duyên, trong túi nhiều tiền, tâm hồn vui sướng.",
  "Năm mới, chúc bạn sắc đẹp tuyệt vời, tiền vô phơi phới, người yêu không cần tìm cũng tự tới.",
  "Năm mới vui vẻ không quạu nha.",
  "Chúc mừng năm mới. Công danh sáng ngời. May mắn khắp nơi, đổ về tơi tới.",
  "Năm mới chúc tất cả các bạn mình xinh như hình đại diện Facebook, ảnh nháy triền miên đăng liền không cần sửa.",
  "Năm mới chúc nhau sức khỏe nhiều. Bạc tiền rủng rỉnh thoải mái tiêu. Gia đình hạnh phúc bè bạn quý. Thanh thản vui chơi mọi buổi chiều.",
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
  "Chúc mọi người vui vẻ như Chim Sẻ, khỏe mạnh như Đại Bàng, giàu sang như chim Phụng, làm lụng như chim Sâu, sống lâu như Đà Điểu.",
  "Chúc mọi người hay ăn chóng béo, tiền nhiều như kẹo, tình chặt như keo, dẻo dai như mèo, mịn màng trắng trẻo, sức khỏe như voi, gia đình mạnh khỏe, mọi người tươi trẻ, đi chơi vui vẻ.",
  "Năm mới: Đau đầu vì nhà giàu! Mệt mỏi vì học giỏi! Buồn phiền vì nhiều tiền! Ngang trái vì xinh gái! Mệt mỏi vì đẹp giai! Và mất ngủ vì không có đối thủ!",
  "Chúc các bạn có nhiều người để ý. Tỏ tình nhiều ý. Tiền nhiều nặng ký. Công việc vừa ý. Miệng cười mắt ti hí. Sống Lâu Một tí.",
  "Năm mới phát tài, phát lộc, phát tướng, phát tình nhưng đừng phát phì!",
  "Chúc mọi người năm mới, tiền vào bạc tỉ, tiền ra rỉ rỉ, miệng cười hi hi, vạn sự như ý, cung hỉ, cung hỉ!",
  "Mỗi năm là một mùa hoa nở, mỗi năm là một mùa bội thu. Cuộc sống như cây đang lớn. Chúc bạn một năm mới Vạn sự như ý.",
  "Vạn lần như ý, Vạn lần như mơ, Triệu sự bất ngờ, Tỷ lần hạnh phúc. Chúc mừng năm mới!",
  "Đầu xuân năm mới chúc Bình An; Chúc luôn Tuổi Trẻ chúc An Khang; Chúc sang năm mới nhiều Tài Lộc; Công thành danh toại chúc Vinh Quang.",
  "Xuân này hơn hẳn mấy xuân qua. Phúc lộc đưa nhau đến từng nhà. Vài lời cung chúc tân niên mới. Vạn sự an khang vạn sự lành.",
  "Thần tài rảo bước khắp mọi nhà, Tiền lộc đầy ắp, xuân hạnh phúc, Mọi người xum họp vui năm mới.",
  "Nhân dịp năm mới. Mến chúc bạn hiền. Sức khỏe vô biên. Thành công liên miên. Hạnh phúc triền miên. Tiền luôn đầy túi.",
  "Năm mới chúc bạn thực hiện được những dự định còn dang dở, quen thêm những người bạn mới, đến những vùng đất mới.",
  "Chúc mừng năm mới – Chúc bạn luôn: Đong đầy hạnh phúc – Gói trọn lộc tài – Giữ mãi an khang – Thắt chặt phú quý.",
  "Chúc mọi người năm mới: Răng vẫn nguyên hàm, tóc không giảm và lãi vay không tăng. Năm mới bình an mọi người nhé!",
  "Năm mới năm me. Gia đình mạnh khỏe. Mọi người tươi trẻ. Đi chơi vui vẻ",
  "Năm mới càng sung sức, không bực tức, không đau nhức, gấp đôi lợi tức... tiền vào thơm phức. Happy New Year!",
  "Happy new year! Chúc các bạn năm mới cười đến trẹo quai hàm, ham làm đến quên mệt mỏi, học giỏi cứ thi là thành, ăn khỏe như vui số cân không đổi!",
  "Năm mới tới rồi! Chúc mọi người tiền vào cửa trước, tiền lẻn cửa sau, hai cái va vào nhau bay vào két sắt.",
  "Tết năm nay hứa mang tiền về cho mẹ, không mang ưu phiền về cho mẹ!",
  "Chúc mừng năm mới! Khoẻ hơn Lý Đức. Mạnh hơn Geogre W.Bush. Giàu hơn Bill Gates. Quyến rũ hơn Don Juan. Bí mật hơn… Bin Laden. May mắn hơn Xuân Tóc Đỏ."
];

function get(key = "") {
  return strings[key];
}

function getRandomWish() {
  return wishes[Math.floor(Math.random() * (wishes.length - 1))]
}

const thingsToExport =  {
  get,
  getRandomWish
};

export default thingsToExport