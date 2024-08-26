import { load, MobileNet } from "@tensorflow-models/mobilenet";
import { setBackend } from "@tensorflow/tfjs";
import { useEffect, useState } from "react";

export type PredictionType = {
  className: string;
  probability: number;
};

export const useImagePrediction = () => {
  const [model, setModel] = useState<MobileNet>();
  const [isMachineLoading, setIsMachineLoading] = useState<boolean>(true);
  const [hasMachineError, setHasMachineError] = useState<boolean>(false);
  const showPredictions = (imageFile: File) => {
    return new Promise(async (resolve, reject) => {
      try {
        const img = new Image();
        // let finalPredictions: predictionType[] = [];
        img.src = URL.createObjectURL(imageFile);
        if (model) {
          loadData(img, model).then((res) => {
            resolve(res);
          });
        }
      } catch (error) {
        reject(error);
      }
    });
  };
  const loadData = (img: HTMLImageElement, model: MobileNet) => {
    return new Promise((resolve, reject) => {
      img.onload = async () => {
        try {
          if (model) {
            const predictions = await model.classify(img);
            resolve(predictions);
          }
        } catch (error) {
          reject(error);
        }
      };
    });
  };
  useEffect(() => {
    setBackend("webgl");
  }, []);

  useEffect(() => {
    if (!model) {
      const startTime = new Date().getTime();
      load({ version: 2, alpha: 1 })
        .then((res) => {
          const endTime = (new Date().getTime() - startTime) / 1000;
          console.log(
            "The load result is this ",
            res,
            " taking ",
            endTime,
            " seconds"
          );
          setModel(res);
        })
        .catch(() => setHasMachineError(true));
    }
    if (model) {
      setIsMachineLoading(false);
    }
  }, [model]);

  return { showPredictions, isMachineLoading, hasMachineError };
};
