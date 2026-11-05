"use client";

import { useCallback, useMemo } from "react";
import { getDevice } from "@/data/devices";
import { STORAGE_KEYS, writeStorage } from "@/lib/storage";
import { useStoredValue } from "./use-stored-value";

export function useDevice() {
  const { raw, ready } = useStoredValue(STORAGE_KEYS.geraet);
  const device = useMemo(() => getDevice(raw), [raw]);

  const setDevice = useCallback((id: string | null) => {
    writeStorage(STORAGE_KEYS.geraet, id);
  }, []);

  return { device, setDevice, ready };
}
