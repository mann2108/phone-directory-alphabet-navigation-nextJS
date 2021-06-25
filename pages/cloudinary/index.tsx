import React, { useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useStyles } from '../../styles/styles';
import { Box, Grid } from "@material-ui/core";
const Demo = () => {
  const classes: any = useStyles();
  const cropperRef = useRef<HTMLImageElement>(null);
  const onCrop = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    console.log(cropper.getCroppedCanvas().toDataURL());
  };

  return (
    <Grid item justify="center" container className={classes.modalStyle}>
				<Grid item justify="center" container className="image-crop-section">
					<Box width={1} pb={1}>
						<Grid item container direction="row">
							<Grid
								item
								justify="center"
								xs={12}
								container
								className={"profile-photo-crop-section"}
              >
                <Cropper
                  style={{ height: 448, width: "100%" }}
                  initialAspectRatio={1}
                  src={"https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"}
                  viewMode={1}
                  guides={false}
                  aspectRatio={1}
                  minCropBoxHeight={10}
                  minCropBoxWidth={10}
                  zoomOnWheel={true}
                  zoomOnTouch={true}
                  modal
                  zoomable={true}
                  center={false}
                  scalable={false}
                  cropBoxResizable={false}
                  dragMode="move"
                  background={false}
                responsive
                cropBoxMovable={false}
                  checkOrientation={false}
                />
                <span className={"class-dashed my-h"}></span>
                <span className={"class-dashed my-v"}></span>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Demo;