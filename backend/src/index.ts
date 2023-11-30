import createServer from "./app"
import config from "./config"
import useGraphql from "./graphql/config"

(() => {
  console.log("                                                                                                    ")
  console.log("                                                                                                    ")
  console.log("                                            XXXXXXXXX                                               ")
  console.log("                                    XXXXXXXXXXXXXXXXXXXXXXXXX                                       ")
  console.log("                                 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                                    ")
  console.log("                           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                              ")
  console.log("                         XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                            ")
  console.log("                      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                          ")
  console.log("                    XXXXXXXXXXXXXXXXXXXXXXXXXXX    XXXXXXXXXXXXXXXXXXXXXXXXX                        ")
  console.log("                  XXXXXXXXXXXXXXXXXXXXXXXX              XXXXXXXXXXXXXXXXXXXXXXX                     ")
  console.log("                 XXXXXXXXXXXXXXXXXXXX                          XXXXXXXXXXXXXXXXX                    ")
  console.log("                XXXXXXXXXXXXXXXXXX           XXXXXXXXXX           XXXXXXXXXXXXXXX                   ")
  console.log("               XXXXXXXXXXXXXXXXXXX        XXXXXXXXXXXXXXXXX           XXXXXXXXXXXX                  ")
  console.log("              XXXXXXXXXXXXXXX          XXXXXXXXXXXXXXXXXXXXXXX         XXXXXXXXXXXX                 ")
  console.log("             XXXXXXXXXXXXXX         XXXXXXXXXXXXXXXXXXXXXXXXXXXXX        XXXXXXXXXXX                ")
  console.log("             XXXXXXXXXX        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX       XXXXXXXXX               ")
  console.log("             XXXXXXXXX       XXXX         XXXXXXXXXXXXXXXXX        XXXX       XXXXXXX               ")
  console.log("             XXXXXXXX       XX                XXXXXXXXX               XX       XXXXXX               ")
  console.log("             XXXXXX         XX               XXXXXXXXXX               XX        XXXXX               ")
  console.log("             XXXXXX         XXX             XXXXXXXXXXXX             XXX         XXXX               ")
  console.log("             XXXXX          XXXXX         XXXXXXXXXXXXXXXX         XXXXX          XXX               ")
  console.log("              XXX            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX           XXX               ")
  console.log("              XXX             XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX            XXX               ")
  console.log("              XXX              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX             XXX               ")
  console.log("               XXX               XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX              XXX                ")
  console.log("                  XXX              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX              XXX                  ")
  console.log("                   XXXX                 XXXXXXXXXXXXXXXXXXXX                XXXX                    ")
  console.log("                      XXXX                                              XXXX                        ")
  console.log("                         XXX                                          XXX                           ")
  console.log("                            XXX                                    XXX                              ")
  console.log("                              XXXX                             XXXX                                 ")
  console.log("                                  XXX                       XXX                                     ")
  console.log("                                     XX                   XX                                        ")
  console.log("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM")
  console.log("MMMMMK:  dWMMKl'    cOWMMXd,    :OWMMx'      :KMXc      'l0MMNl  cX0;  dWMWO:    ,oXMMXc     ':OWMMM")
  console.log("MMMMM0'  cNMX:  .;.  ,0MWo  .;'  '0MWd   ':::dXMK,   .;.  ;KMX;  ;XO.  lWM0,  .;.  oWMK,  .;.  ,0MMM")
  console.log("MMMMM0'  cNM0'  cXd  .kMNc  .OO:':0MWd  .kMMMMMMK,   :Kl  .OMX;  ;XO.  lWMO.  cKo''oNMK,  :Xo  .OMMM")
  console.log("MMMMM0'  cNM0'  cNd. .kMWO'  .o0NWWMWd   ;ookNMMK,   ,k:  '0MX;  .c:.  lWMXl  .:kXNWMMK,  .c'  :KMMM")
  console.log("MMMMM0'  cNM0'  cNd. .kMMW0c.  .dXMMWd      ,0MMK,       .oNMX;        lWMMNx'  .:OWMMK,       lNMMM")
  console.log("MMMMM0'  cNM0'  cNd. .kMMWNXOc.  :XMWd  .lkk0WMMK,   .:ld0WMMX;  'do.  lWMWNNKd'  .kWMK,  'xc  .xMMM")
  console.log("MMMMM0'  cNM0'  cNd. .kMNo''oXo  .kMWd  .kMMMMMMK,   :NMMMMMMX;  ;XO.  lWM0;.:00'  :XMK,  :Xk.  oWMM")
  console.log("MMW0o;   oWMX:  .c'  '0MNl  .c,  .OMWd   ;lllxNMK,   :NMMMMMMX;  ;XO.  lWMO'  ,:.  lNMK,  .c,  .xMMM")
  console.log("MMWd. .'oXMMW0:.   .;kWMMKl..  .,kWMMx.      ;KMK:  .cNMMMMMMXc  :X0, .oWMWk,.   .lKMMK;     .,xNMMM")
  console.log("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM")
  console.log("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM  CREATED BY JOSEPHSB  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM")
  console.log("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM")
  main()
})()

async function main() {
  const app = await createServer();
  await useGraphql(app);
  app.listen(config.PORT, () => console.log(`Server run on port ${config.PORT}`));
}
