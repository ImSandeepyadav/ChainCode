import { Typography, Button, Paper, TextField, Box, Grid } from "@mui/material";
import styles from "../styles/Mainhome.module.css";
import Footer from "./footer";
import Image from "next/image";
import Hyperledger from "../public/Hyperledger-fabric-devlpoment.png";
import NFT from "../public/nft.png";
import Devops from "../public/devops.png";
import Blockchain from "../public/Blockchain consulting.png";
import Binance from "../public/Binance smart chain.png";
import Dapp from "../public/Dapp development.png";

const items = [
  {
    img: Hyperledger,
    title: "Hyperledger Fabric Development",
  },
  {
    img: NFT,
    title: "Non Fungible Tokens",
  },
  {
    img: Devops,
    title: "DevOps Blockchain Enterprise ",
  },
  {
    img: Blockchain,
    title: "Blockchain Consulting",
  },
  {
    img: Binance,
    title: "Binance Smart Chain",
  },
  {
    img: Dapp,
    title: "Dapp Development",
  },
];

const HomePage = (width) => {
  return (
    <div>
      <div className={styles.container}>
        <div
          style={{
            padding: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <img
              src="../logo.png"
              alt="next"
              style={{ width: "100%", height: "90px" }}
            />
          </div>
          <div>
            <img
              src="../hamburger.png"
              alt="next"
              style={{ width: "100%", height: "50px" }}
            />
          </div>
        </div>
        <div style={{ paddingLeft: "70px" }}>
          <Typography
            style={{
              fontFamily: "Buttershine Serif",
              fontWeight: 400,
              fontSize:
                width === "xs" ? "12px" : width === "sm" ? "18px" : "38px",
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            Accelerating <br />
            Decentralization
          </Typography>
          <img src="../Vector-1.jpg" />
          <Typography
            style={{
              marginTop: "10px",
              fontFamily: "Montserrat",
              fontWeight: 700,
              fontSize:
                width === "xs" ? "12px" : width === "sm" ? "16px" : "25px",
              color: "#F5F5F5",
            }}
          >
            Supercharge your business with <br />
            disruptive blockchain <br />
            capabilities
          </Typography>
          <div
            style={{
              marginTop: "30px",
              borderSize: "borderBox",
              borderRadius: "40px",
              border: "2px solid",
              background:
                "linear-gradient(90.19deg, #B43795 0.15%, #7534B2 99.84%)",
              // borderImageSource: 'linear-gradient(90.19deg, #B43795 0.15%, #7534B2 99.84%)',
              width: "170px",
              height: "40px",
              padding: "1px",
            }}
          >
            <Button
              style={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "10px",
                background: "black",
                color: "#FFFFFF",
                width: "100%",
                height: "100%",
                borderRadius: "40px",
              }}
            >
              CONSULT FOR FREE
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div>
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize:
                    width === "xs" ? "12px" : width === "sm" ? "16px" : "20px",
                  color: "#FFFFFF",
                  width: "400px",
                }}
              >
                We at Chaincode are committed to delivering high value-driven
                growth with an unending quest for the new and striving for
                excellence is the foundation of our culture.
              </Typography>
            </div>
            <div style={{ paddingTop: "60px" }}>
              <Paper className={styles.paper}>
                <img
                  src="../Elements-09.svg"
                  style={{ padding: "15px", width: "100%", height: "120px" }}
                />
                <Typography
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize:
                      width === "xs"
                        ? "12px"
                        : width === "sm"
                        ? "16px"
                        : "18px",
                    color: "#FFFFFF",
                    padding: "30px",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </Typography>
              </Paper>
            </div>
          </div>
          <div style={{ paddingTop: "30px"}}>
            <div>
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: "40px",
                  color: "#F5F5F5",
                }}
              >
                Get In Touch
              </Typography>
              <img src="../Vector-1.jpg" />
            </div>
            <div style={{ paddingTop: "30px" }}>
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#FFFFFF",
                }}
              >
                Your Name
              </Typography>
              <TextField
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                  width: "100%",
                }}
                size="small"
              />
            </div>
            <div style={{ paddingTop: "30px" }}>
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#FFFFFF",
                }}
              >
                Your Email
              </Typography>
              <TextField
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                  width: "100%",
                }}
                size="small"
              />
            </div>
            <div style={{ paddingTop: "30px" }}>
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#FFFFFF",
                }}
              >
                Your Organization
              </Typography>
              <TextField
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                  width: "100%",
                }}
                size="small"
              />
            </div>
            <div style={{ paddingTop: "30px" }}>
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#FFFFFF",
                }}
              >
                Contact Number
              </Typography>
              <TextField
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                  width: "100%",
                }}
                size="small"
              />
            </div>
            <div style={{ paddingTop: "30px" }}>
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#FFFFFF",
                }}
              >
                Your Message
              </Typography>
              <TextField
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                  width: "100%",
                }}
                size="medium"
              />
            </div>
            <div
              style={{
                marginTop: "30px",
                borderSize: "borderBox",
                borderRadius: "40px",
                border: "2px solid",
                background:
                  "linear-gradient(90.19deg, #B43795 0.15%, #7534B2 99.84%)",
                width: "170px",
                height: "40px",
                padding: "1px",
              }}
            >
              <Button
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: "10px",
                  background: "black",
                  color: "#FFFFFF",
                  width: "100%",
                  height: "100%",
                  borderRadius: "40px",
                }}
              >
                SEND MESSAGE
              </Button>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "80px",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div>
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "100px",
                background:
                  "linear-gradient(180deg, #B43795 0%, rgba(2, 0, 14, 0.51) 100%)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              100+
            </Typography>
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "25px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              PRODUCTS
            </Typography>
          </div>
          <div>
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "100px",
                background:
                  "linear-gradient(180deg, #B43795 0%, rgba(2, 0, 14, 0.51) 100%)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              50+
            </Typography>
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "25px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              MVPs
            </Typography>
          </div>
          <div>
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "100px",
                background:
                  "linear-gradient(180deg, #B43795 0%, rgba(2, 0, 14, 0.51) 100%)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              10+
            </Typography>
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "25px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              AWARDS
            </Typography>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{ background: "white", width: "90%", height: "3px" }}
          ></div>
        </div>

        <div
          style={{
            padding: "80px",
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
          }}
        >
          <div>
            <img
              src="../upwork.png"
              style={{ width: "200px", height: "120px" }}
            />
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize:
                  width === "xs" ? "12px" : width === "sm" ? "14px" : "16px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              We are top rated with 100% job success rate on Upwork.
            </Typography>
            <img src="../star.png" style={{ width: "150px", height: "40px" }} />
          </div>
          <div>
            <img
              src="../microsoft.png"
              style={{ width: "200px", height: "120px" }}
            />
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize:
                  width === "xs" ? "12px" : width === "sm" ? "14px" : "16px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              Microsoft Century Program ranked our supply chain management
              product amongst TOP 6.
            </Typography>
            <img src="../star.png" style={{ width: "150px", height: "40px" }} />
          </div>
          <div>
            <img
              src="../DIPP.png"
              style={{ width: "200px", height: "120px" }}
            />
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize:
                  width === "xs" ? "12px" : width === "sm" ? "14px" : "16px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              Founded in 2019 we are a DIPP recognized start up.
            </Typography>
            <img src="../star.png" style={{ width: "150px", height: "40px" }} />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{ background: "white", width: "90%", height: "3px" }}
          ></div>
        </div>

        <div
          style={{
            padding: "60px",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div>
            <img
              src="../finance.png"
              style={{ width: "100%", height: "150px" }}
            />
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "25px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              Finance
            </Typography>
          </div>
          <div>
            <img
              src="../healthcare.png"
              style={{ width: "100%", height: "150px" }}
            />
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "25px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              Healthcare
            </Typography>
          </div>
          <div>
            <img
              src="../Real estate.png"
              style={{ width: "100%", height: "150px" }}
            />
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "25px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              Real Estate
            </Typography>
          </div>
          <div>
            <img
              src="../Supply chain.png"
              style={{ width: "100%", height: "150px" }}
            />
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "25px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              Supply Chain
            </Typography>
          </div>
        </div>

        <div style={{ padding: "60px" }}>
          <div style={{ textAlign: "center" }}>
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "40px",
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              SERVICES
            </Typography>
            <img src="../Vector-1.jpg" />
          </div>
          <div style={{ paddingTop: "30px" }}>
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize:
                  width === "xs" ? "12px" : width === "sm" ? "16px" : "20px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              At Chaincode, we are committed to bringing the potential of
              Blockchain to every enterprise through our domain expertise and
              unparalleled credibility. Here is how we are helping create a
              better business world.
            </Typography>
          </div>
          <div style={{ margin: "3% 0" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {items.map((item) => {
                  return (
                    <Grid item xs={12} sm={4}>
                      <TrendingItem item={item} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </div>
        </div>
      </div>
      <Footer width={width} />
    </div>
  );
};

export default HomePage;

const TrendingItem = (props) => {
  const width = props.width;
  const { img, title } = props.item;
  return (
    <div
      style={{
        display: width === "xs" ? "flex" : "block",
        textAlign: "center",
      }}
    >
      <Image src={img} width={100} height={100} />
      <div>
        <Typography
          style={{
            fontFamily: "Montserrat",
            textAlign: "center",
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize:
              width === "xs" ? "12px" : width === "sm" ? "16px" : "20px",
          }}
        >
          {title}
        </Typography>
      </div>
    </div>
  );
};
