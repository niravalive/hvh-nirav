import json
import re

file_path = '/Users/nirav/Downloads/hvh-global-main/src/data/products.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

metadata_map = {
    "Single Core": {
        "desc": " wires featuring FR/FRLS/ZHFR compounds for enhanced safety. Withstands overloads and retards fire spread.",
        "specs": "Voltage Grade: Upto 1100 V | Sizes: 0.5 sq.mm to 16.0 sq.mm",
        "features": ["Flame Retardant (FR/FR-LSH/ZHFR)", "Annealed Bare/Tinned Copper", "High Oxygen & Temperature Index", "100% Eco-Friendly (ZHFR)"],
        "keyPoints": ["Applicable Standards: IS:694, BS:6004, IEC-60228", "Safe evacuation in emergency", "Available in Coils/Drums/Reels"]
    },
    "Multicore Flexible": {
        "desc": "Premium single and multicore flexible cables for versatile industrial and domestic applications.",
        "specs": "Voltage Grade: Upto 1100 V | Single Core: 0.5 to 1000 sq.mm | Multicore: 0.5 to 120 sq.mm",
        "features": ["Bare/Tinned Copper Conductor", "PVC/FRLS/LSZH Insulation", "Customized designs available", "Highly flexible design"],
        "keyPoints": ["Applicable Standards: IS:694, IEC-60228, BSEN:50525-3-41", "Available in 2C to 24C", "Packed in Coils, Wooden/Steel Drums"]
    },
    "Lv Power And Control Cable": {
        "desc": "Low Voltage Power & Control Cables designed for rugged power distribution and precision control.",
        "specs": "Voltage Grade: Up to 3.3kV | Power: Up to 1000 sq.mm (5 cores) | Control: Up to 6.0 sq.mm (61 cores)",
        "features": ["Copper/Aluminium Conductor", "XLPE/PVC/LSZH Insulation", "Extensive Armouring Options", "FRLS/LSZH Sheath available"],
        "keyPoints": ["Applicable Standards: IEC-60502-1, IS 1554-1, IS-7098-1/2", "Galvanised Steel/Aluminium Armouring", "Packed in Wooden/Steel Drums"]
    },
    "Hv  And Hv Cables": {
        "desc": "High Voltage and Medium Voltage cables engineered for robust long-distance power transmission.",
        "specs": "Voltage Rating: High/Medium Voltage | Armour: Steel/Aluminium/Copper Tape",
        "features": ["PVC/LSZH/FRLS Outer Sheath", "Galvanised Steel Wire/Tape Armour", "Customizable design", "Extremely durable"],
        "keyPoints": ["Applicable Standards: International Standards Compliant", "Project-specific customization", "Available with comprehensive cable accessories"]
    },
    "Ehv Cables": {
        "desc": "Extra High Voltage Cables manufactured in technical collaboration with BRUGG, capable of up to 400kV.",
        "specs": "Voltage Rating: 66kV to 400kV | Size: Up to 2500 sq.mm",
        "features": ["Extruded Super Clean XLPE Layer", "Copper/Aluminium Conductor", "Corrugated Lead Alloy/Poly-Al Sheath", "Water Blocking Tape"],
        "keyPoints": ["Applicable Standards: IEC 60840, IEC-62067, IS 7098-3", "Technical collaboration with BRUGG", "Advanced semi-conductive screening"]
    },
    "Signal And Instrumentation Cable": {
        "desc": "Precision signal and instrumentation cables with advanced individual or overall screening for minimal interference.",
        "specs": "Voltage Grade: Upto 1100 Volts | Size: Up to 6 sq.mm",
        "features": ["Aluminium Mylar/Copper Tape Screening", "Tinned/Plain Copper Conductor", "XLPE/PE/HFFR Insulation", "Galvanised Steel Armouring"],
        "keyPoints": ["Applicable Standards: BSEN 50288 PART-7, IEC-60092", "Available in Multicore/Multi-pair/Multi-triad", "Robust PVC/HFFR/FRLS Sheath"]
    },
    "Solar Cable": {
        "desc": "High-performance TUV-certified solar cables designed for extreme outdoor weather conditions and UV exposure.",
        "specs": "Voltage Rating: Up to 1.8 KV DC | Size: Up to 400 sq.mm",
        "features": ["UV & Ozone Resistant", "Zero Halogen (XLPO)", "Flame & Fire Retardant", "Lasts up to 30 years"],
        "keyPoints": ["Applicable Standards: TUV 2 Pfg 1169/08.07, IEC 62930", "Flexible Annealed Tinned Copper", "Suitable for all common connector types"]
    },
    "Rubber Cables": {
        "desc": "Highly flexible and resilient rubber cables designed for heavy-duty industrial, railway, and mining applications.",
        "specs": "Voltage Rating: Up to 33000 Volts",
        "features": ["EPR/CSP/SILICON/EVA Insulation", "Tinned/Plain Copper Conductor", "PCP/NBR/CPE Sheath", "Extreme durability"],
        "keyPoints": ["Applicable Standards: IEC-60092, IEC-60502-1&2, IS:9968", "Ideal for Trailing, Mining, and Festoon applications", "Optional Steel/Copper Braiding"]
    },
    "Fire Survival Cable": {
        "desc": "Mission-critical fire survival cables engineered with glass mica heat barrier tapes to maintain circuit integrity.",
        "specs": "Voltage Rating: Up to 1100 Volts | Size: Up to 1000 sq.mm",
        "features": ["Glass Mica Tape Fire Barrier", "XLPE/SILICON/EPR Insulation", "LSZH/FRLS Sheath", "Maintains power during fire"],
        "keyPoints": ["Applicable Standards: BS 7846, IEC-60502-1", "Crucial for emergency evacuation systems", "Available in Power, Control, and Signal variants"]
    },
    "Winding Wire And Flat Cables": {
        "desc": "Specially formulated winding wires and flat cables primarily used in submersible pumps and motors.",
        "specs": "Voltage Grade: Upto 1100 V | Winding: 0.5-3 sq.mm | Flat: 1.5-35 sq.mm",
        "features": ["Copper Conductor", "PVC/Triple Poly Tape Insulation", "High water resistance", "High flexibility"],
        "keyPoints": ["Applicable Standards: IS:8783, IS:694", "Designed for Submersible Pumps", "Drum/Coil packaging"]
    },
    "Communication": {
        "desc": "Comprehensive range of communication cables including Telephone, Co-axial, CAT 6, and CCTV cables.",
        "specs": "Sizes: Multiple ranges including RG 11, CAT 6, CCTV 3+1/4+1",
        "features": ["Bare Conductor / CCS", "Foam PE/HDPE Insulation", "Aluminium Mylar/Braid Shielding", "High signal integrity"],
        "keyPoints": ["Applicable Standards: ANSI/TIA-568-C.2", "Includes ITD Standard Telephone Cables", "Multiple packaging options (100/305 mtrs)"]
    }
}

objects = re.findall(r'(\{\s*"id":\s*"[^"]+".*?\})', content, re.DOTALL)
new_objects = []

count = 0
for obj in objects:
    if '"subCategory": "Wire and Cable"' in obj:
        name_match = re.search(r'"name":\s*"([^"]+)"', obj)
        if name_match:
            base_name = name_match.group(1).split(' - Variant')[0]
            if base_name in metadata_map:
                meta = metadata_map[base_name]
                
                # Replace desc
                obj = re.sub(r'"desc":\s*"[^"]+"', f'"desc": "{meta["desc"]}"', obj)
                # Replace specs
                obj = re.sub(r'"specs":\s*"[^"]+"', f'"specs": "{meta["specs"]}"', obj)
                # Replace features
                feat_str = json.dumps(meta["features"])
                obj = re.sub(r'"features":\s*\[.*?\]', f'"features": {feat_str}', obj, flags=re.DOTALL)
                # Replace keyPoints
                kp_str = json.dumps(meta["keyPoints"])
                obj = re.sub(r'"keyPoints":\s*\[.*?\]', f'"keyPoints": {kp_str}', obj, flags=re.DOTALL)
                
                count += 1
    new_objects.append(obj)

final_array_str = ",\n  ".join(new_objects)
final_content = f"const productsData = [\n  {final_array_str}\n];\n\nexport default productsData;\n"

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print(f"Successfully updated metadata for {count} Wire and Cable products.")
