function Text_slider()
{
return(
    <>
  {/* text slider */}
  <marquee
    behavior="scroll"
    direction="left"
    scrollamount={4}
    style={{
      backgroundColor: "#0058a9",
      color: "white",
      fontSize: 20,
      padding: 12
    }}
  >
    📢 Conical Baffle installation charges | 📞 Helpline: 1199 | 🌐
    www.ssgc.com.pk
  </marquee>
</>

)
}
export default Text_slider