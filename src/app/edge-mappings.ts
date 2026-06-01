import {OneOverlay, OneOrManyOverlay} from "./erd-overlays";
import {PlainArrowOverlay, type EdgePropertyMappings} from "@visuallyjs/browser-ui";

/**
 * Mappings for edge types
 */
export default function edgeMappings(): EdgePropertyMappings {

    return [
        {
            property: "type",
            mappings:{
                "plain":{},
                "targetArrow": {
                    targetMarker: {
                        type:PlainArrowOverlay.type,
                        options:{
                            width:12,
                            length:12
                        }
                    }
                },
                "source_1": { sourceMarker: OneOverlay.type },
                "source_M": { sourceMarker: OneOrManyOverlay.type },
                "target_1": { targetMarker: OneOverlay.type },
                "target_N": { targetMarker: OneOrManyOverlay.type }
            }
        }

    ]
}
