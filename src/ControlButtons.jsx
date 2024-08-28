import ControlButton from "./ControlButton";
import { controls } from "./controls";
import controlMaps from "./assets/btnControls";

export default function ControlButtons() {
  return (
    <div className="fixed md:hidden flex justify-between items-center w-full bottom-20 left-0 px-10">
      <div className="h-28 w-28 flex justify-center items-center relative">
        <ControlButton
          style="absolute -top-5 p-2"
          label={controlMaps.up}
          onActivate={() => (controls["arrowup"] = true)}
          onDeactivate={() => (controls["arrowup"] = false)}
        />
        <ControlButton
          style="absolute -bottom-5 p-2"
          label={controlMaps.bottom}
          onActivate={() => (controls["arrowdown"] = true)}
          onDeactivate={() => (controls["arrowdown"] = false)}
        />
        <ControlButton
          style="absolute -left-5 p-2"
          label={controlMaps.left}
          onActivate={() => (controls["arrowleft"] = true)}
          onDeactivate={() => (controls["arrowleft"] = false)}
        />
        <ControlButton
          style="absolute -right-5 p-2"
          label={controlMaps.right}
          onActivate={() => (controls["arrowright"] = true)}
          onDeactivate={() => (controls["arrowright"] = false)}
        />
      </div>
      <div>
        <ControlButton
            style="scale-[1.25]"
          label={controlMaps.turbo}
          onActivate={() => (controls[" "] = true)}
          onDeactivate={() => (controls[" "] = false)}
        />
      </div>
    </div>
  );
}
